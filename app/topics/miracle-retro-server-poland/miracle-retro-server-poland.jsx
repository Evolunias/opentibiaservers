import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-retro-server-poland');
}

export default function MiracleRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="miracle-retro-server-poland" />;
}
