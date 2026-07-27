import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-poland-servers');
}

export default function KasteriaPolandServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-poland-servers" />;
}
