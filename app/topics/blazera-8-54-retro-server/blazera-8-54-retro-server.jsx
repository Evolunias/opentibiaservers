import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-54-retro-server');
}

export default function Blazera854RetroServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-54-retro-server" />;
}
