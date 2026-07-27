import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-server-south-america');
}

export default function FreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-server-south-america" />;
}
