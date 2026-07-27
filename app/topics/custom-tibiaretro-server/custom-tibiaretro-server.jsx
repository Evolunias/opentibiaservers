import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-server');
}

export default function CustomTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-server" />;
}
