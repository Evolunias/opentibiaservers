import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-ot-server');
}

export default function FreshStartTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-ot-server" />;
}
