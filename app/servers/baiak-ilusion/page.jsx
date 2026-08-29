import BaiakIlusionWikiPage from '@/app/components/BaiakIlusionWikiPage';
import { buildArticleMetadata } from '@/lib/page-metadata';

export const revalidate = 3600;

const pageMetadata = {
  slug: 'baiak-ilusion',
  path: '/servers/baiak-ilusion',
  type: 'server',
  title: 'Baiak Ilusion Open Tibia Server: Status, Rates, and Player Guide',
  h1: 'Baiak Ilusion: server status, systems, and how to play',
  metaDescription: 'Research-backed Baiak Ilusion Open Tibia server guide covering the Brazil-hosted 8.6 PvP profile, rates, City War, custom systems, official links, and current verification notes.',
  primaryKeyword: 'Baiak Ilusion',
};

export function generateMetadata() {
  return buildArticleMetadata(pageMetadata);
}

export default function Page() {
  return <BaiakIlusionWikiPage />;
}
