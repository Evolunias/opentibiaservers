import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-retro-server-france');
}

export default function OxygenotRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-retro-server-france" />;
}
