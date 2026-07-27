import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-canada');
}

export default function RetroStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="retro-status-canada" />;
}
