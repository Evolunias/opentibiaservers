import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-6-retro-server');
}

export default function Blazera86RetroServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-6-retro-server" />;
}
