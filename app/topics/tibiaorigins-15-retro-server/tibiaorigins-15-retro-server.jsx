import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-15-retro-server');
}

export default function Tibiaorigins15RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-15-retro-server" />;
}
