import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-4-retro-server');
}

export default function Medivia84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-4-retro-server" />;
}
