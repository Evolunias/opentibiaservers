import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-tibiaretro-server');
}

export default function HighExpTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-tibiaretro-server" />;
}
