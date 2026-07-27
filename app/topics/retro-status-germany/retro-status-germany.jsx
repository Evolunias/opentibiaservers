import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-germany');
}

export default function RetroStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="retro-status-germany" />;
}
