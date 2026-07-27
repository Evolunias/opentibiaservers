import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-usa-servers');
}

export default function MiracleUsaServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-usa-servers" />;
}
