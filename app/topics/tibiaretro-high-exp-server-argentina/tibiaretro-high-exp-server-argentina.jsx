import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-high-exp-server-argentina');
}

export default function TibiaretroHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-high-exp-server-argentina" />;
}
