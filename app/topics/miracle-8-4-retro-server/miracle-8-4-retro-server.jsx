import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-8-4-retro-server');
}

export default function Miracle84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="miracle-8-4-retro-server" />;
}
