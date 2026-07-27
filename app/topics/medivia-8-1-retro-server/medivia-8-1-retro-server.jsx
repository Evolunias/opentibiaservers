import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-retro-server');
}

export default function Medivia81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-retro-server" />;
}
