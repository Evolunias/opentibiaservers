import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-usa-server');
}

export default function KasteriaUsaServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-usa-server" />;
}
