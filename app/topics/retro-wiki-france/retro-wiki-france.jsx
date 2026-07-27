import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-wiki-france');
}

export default function RetroWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-wiki-france" />;
}
