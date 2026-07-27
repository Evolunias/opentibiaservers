import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-midhem-server');
}

export default function RetroMidhemServerKeywordPage() {
  return <StaticKeywordPage slug="retro-midhem-server" />;
}
