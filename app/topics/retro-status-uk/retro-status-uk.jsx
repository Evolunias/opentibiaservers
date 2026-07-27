import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-uk');
}

export default function RetroStatusUkKeywordPage() {
  return <StaticKeywordPage slug="retro-status-uk" />;
}
