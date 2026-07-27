import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-evolera-server');
}

export default function RetroEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="retro-evolera-server" />;
}
