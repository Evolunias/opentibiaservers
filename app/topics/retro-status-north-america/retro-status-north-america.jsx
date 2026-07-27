import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-north-america');
}

export default function RetroStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-status-north-america" />;
}
