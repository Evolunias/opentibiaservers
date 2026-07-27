import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-9-6-retro-server');
}

export default function Medivia96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-9-6-retro-server" />;
}
