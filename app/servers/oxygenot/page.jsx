import CanonicalServerRoute, { buildCanonicalServerMetadata } from '@/app/components/CanonicalServerRoute';

import OxygenotWikiPage, { oxygenotPage } from '@/app/components/OxygenotWikiPage';
import { buildArticleMetadata } from '@/lib/page-metadata';

export const revalidate = 3600;

export function generateMetadata() {
  return buildArticleMetadata(oxygenotPage);
}

export default function Page() {
  return <OxygenotWikiPage />;
}
