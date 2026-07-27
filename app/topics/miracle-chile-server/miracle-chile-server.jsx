import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-chile-server');
}

export default function MiracleChileServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-chile-server" />;
}
