import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-unline-server');
}

export default function RetroUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="retro-unline-server" />;
}
