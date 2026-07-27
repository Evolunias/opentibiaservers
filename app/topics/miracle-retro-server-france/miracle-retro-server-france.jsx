import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-retro-server-france');
}

export default function MiracleRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="miracle-retro-server-france" />;
}
