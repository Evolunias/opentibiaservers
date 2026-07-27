import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-54-retro-server');
}

export default function Medivia854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-54-retro-server" />;
}
