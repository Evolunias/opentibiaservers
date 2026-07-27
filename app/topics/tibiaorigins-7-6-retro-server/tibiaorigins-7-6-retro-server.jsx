import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaorigins-7-6-retro-server');
}

export default function Tibiaorigins76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaorigins-7-6-retro-server" />;
}
