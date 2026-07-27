import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-4-retro-server');
}

export default function Blazera84RetroServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-4-retro-server" />;
}
