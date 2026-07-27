import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-north-america-server');
}

export default function LumineraNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-north-america-server" />;
}
