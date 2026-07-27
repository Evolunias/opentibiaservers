import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-usa');
}

export default function RetroStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="retro-status-usa" />;
}
