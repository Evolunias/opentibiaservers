import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-status-sweden');
}

export default function RetroStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="retro-status-sweden" />;
}
