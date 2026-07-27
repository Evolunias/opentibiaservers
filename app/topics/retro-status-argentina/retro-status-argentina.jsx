import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-argentina');
}

export default function RetroStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="retro-status-argentina" />;
}
