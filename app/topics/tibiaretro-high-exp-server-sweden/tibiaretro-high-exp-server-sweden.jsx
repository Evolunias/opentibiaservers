import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-high-exp-server-sweden');
}

export default function TibiaretroHighExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-high-exp-server-sweden" />;
}
