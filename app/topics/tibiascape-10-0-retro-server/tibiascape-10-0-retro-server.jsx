import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-0-retro-server');
}

export default function Tibiascape100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-0-retro-server" />;
}
