import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-6-retro-server');
}

export default function Medivia76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-6-retro-server" />;
}
