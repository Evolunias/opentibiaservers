import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-poland-server');
}

export default function KasteriaPolandServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-poland-server" />;
}
