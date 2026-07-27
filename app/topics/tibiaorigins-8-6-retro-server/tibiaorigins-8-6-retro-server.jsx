import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-6-retro-server');
}

export default function Tibiaorigins86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-6-retro-server" />;
}
