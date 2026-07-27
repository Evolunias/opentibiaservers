import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-retro-server');
}

export default function Blazera13RetroServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-retro-server" />;
}
