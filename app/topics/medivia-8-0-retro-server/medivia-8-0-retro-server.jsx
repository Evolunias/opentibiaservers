import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-0-retro-server');
}

export default function Medivia80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-0-retro-server" />;
}
