import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-11-retro-server');
}

export default function Blazera11RetroServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-11-retro-server" />;
}
