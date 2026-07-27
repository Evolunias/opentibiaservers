import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-tibianus-server');
}

export default function RetroTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="retro-tibianus-server" />;
}
