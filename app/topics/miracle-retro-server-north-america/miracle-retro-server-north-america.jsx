import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-retro-server-north-america');
}

export default function MiracleRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="miracle-retro-server-north-america" />;
}
