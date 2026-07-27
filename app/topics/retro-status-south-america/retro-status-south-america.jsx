import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-south-america');
}

export default function RetroStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="retro-status-south-america" />;
}
