import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-7-4-retro-server');
}

export default function Blazera74RetroServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-7-4-retro-server" />;
}
