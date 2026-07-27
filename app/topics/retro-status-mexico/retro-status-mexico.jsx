import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-mexico');
}

export default function RetroStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="retro-status-mexico" />;
}
