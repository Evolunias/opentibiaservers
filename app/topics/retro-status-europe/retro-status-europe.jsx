import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-europe');
}

export default function RetroStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="retro-status-europe" />;
}
