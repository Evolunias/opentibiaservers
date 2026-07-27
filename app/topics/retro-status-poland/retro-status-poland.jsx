import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-poland');
}

export default function RetroStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="retro-status-poland" />;
}
