import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-france');
}

export default function ImperianicRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-france" />;
}
