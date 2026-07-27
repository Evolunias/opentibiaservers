import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-6-retro-server');
}

export default function Tibianus76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-6-retro-server" />;
}
