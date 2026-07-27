import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-retro-server-germany');
}

export default function MiracleRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="miracle-retro-server-germany" />;
}
