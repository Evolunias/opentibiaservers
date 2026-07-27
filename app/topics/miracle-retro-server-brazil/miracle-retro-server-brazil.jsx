import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-retro-server-brazil');
}

export default function MiracleRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="miracle-retro-server-brazil" />;
}
