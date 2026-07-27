import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-6-retro-server');
}

export default function Tibiascape76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-6-retro-server" />;
}
