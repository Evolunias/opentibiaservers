import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-fresh-start-server-argentina');
}

export default function TibiaretroFreshStartServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-fresh-start-server-argentina" />;
}
