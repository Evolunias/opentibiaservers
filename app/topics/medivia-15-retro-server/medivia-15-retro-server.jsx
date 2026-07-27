import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-15-retro-server');
}

export default function Medivia15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-15-retro-server" />;
}
