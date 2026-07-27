import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-usa-servers');
}

export default function KasteriaUsaServersKeywordPage() {
  return <StaticKeywordPage slug="kasteria-usa-servers" />;
}
