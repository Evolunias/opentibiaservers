import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-14-retro-server');
}

export default function Tibiascape14RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-14-retro-server" />;
}
