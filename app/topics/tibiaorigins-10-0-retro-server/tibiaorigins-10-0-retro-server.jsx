import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-10-0-retro-server');
}

export default function Tibiaorigins100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-10-0-retro-server" />;
}
