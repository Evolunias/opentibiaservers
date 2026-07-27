import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-france');
}

export default function RetroStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="retro-status-france" />;
}
