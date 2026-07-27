import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-7-4-retro-server');
}

export default function Tibianus74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-7-4-retro-server" />;
}
