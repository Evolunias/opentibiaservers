import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-ot-server');
}

export default function CustomTibiaretroOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-ot-server" />;
}
