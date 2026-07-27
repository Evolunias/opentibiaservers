import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-brazil');
}

export default function RetroStatusBrazilKeywordPage() {
  return <StaticKeywordPage slug="retro-status-brazil" />;
}
