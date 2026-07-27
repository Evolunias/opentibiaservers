import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-14-retro-server');
}

export default function Medivia14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-14-retro-server" />;
}
