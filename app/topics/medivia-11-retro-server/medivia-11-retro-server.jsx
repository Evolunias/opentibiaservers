import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-11-retro-server');
}

export default function Medivia11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-11-retro-server" />;
}
