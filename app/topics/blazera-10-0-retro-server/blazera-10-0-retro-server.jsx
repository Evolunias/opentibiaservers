import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-10-0-retro-server');
}

export default function Blazera100RetroServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-10-0-retro-server" />;
}
