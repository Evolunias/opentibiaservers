import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-72-retro-server');
}

export default function Blazera772RetroServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-72-retro-server" />;
}
