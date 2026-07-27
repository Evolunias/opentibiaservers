import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-client-france');
}

export default function RetroClientFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-client-france" />;
}
