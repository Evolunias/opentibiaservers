import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-ot-server');
}

export default function NewTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-ot-server" />;
}
