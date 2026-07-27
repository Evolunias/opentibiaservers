import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-13-retro-server');
}

export default function Medivia13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-13-retro-server" />;
}
