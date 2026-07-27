import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-north-america-servers');
}

export default function LumineraNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="luminera-north-america-servers" />;
}
