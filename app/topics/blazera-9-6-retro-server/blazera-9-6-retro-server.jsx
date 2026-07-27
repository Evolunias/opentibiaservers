import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-9-6-retro-server');
}

export default function Blazera96RetroServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-9-6-retro-server" />;
}
