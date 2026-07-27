import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-chile-servers');
}

export default function MiracleChileServersKeywordPage() {
  return <StaticKeywordPage slug="miracle-chile-servers" />;
}
