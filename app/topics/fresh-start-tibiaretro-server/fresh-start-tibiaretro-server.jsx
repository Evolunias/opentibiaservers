import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-server');
}

export default function FreshStartTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-server" />;
}
