import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-client');
}

export default function KasteriaClientKeywordPage() {
  return <StaticKeywordPage slug="kasteria-client" />;
}
