import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('retro-zezenia-online-server');
}

export default function RetroZezeniaOnlineServerKeywordPage() {
  return <StaticKeywordPage slug="retro-zezenia-online-server" />;
}
