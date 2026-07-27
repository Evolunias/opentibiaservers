import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-status');
}

export default function KasteriaStatusKeywordPage() {
  return <StaticKeywordPage slug="kasteria-status" />;
}
