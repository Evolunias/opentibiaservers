import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-12-retro-server');
}

export default function Medivia12RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-12-retro-server" />;
}
