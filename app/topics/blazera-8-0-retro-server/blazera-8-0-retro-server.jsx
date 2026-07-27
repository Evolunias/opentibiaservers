import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-8-0-retro-server');
}

export default function Blazera80RetroServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-8-0-retro-server" />;
}
