import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-8-1-retro-server');
}

export default function Tibiaorigins81RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-8-1-retro-server" />;
}
