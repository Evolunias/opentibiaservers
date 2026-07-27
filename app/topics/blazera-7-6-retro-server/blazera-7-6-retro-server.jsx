import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-6-retro-server');
}

export default function Blazera76RetroServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-6-retro-server" />;
}
