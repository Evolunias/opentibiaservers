import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-tibiaretro-server');
}

export default function LowExpTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-tibiaretro-server" />;
}
