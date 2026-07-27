import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-server');
}

export default function NewTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-server" />;
}
