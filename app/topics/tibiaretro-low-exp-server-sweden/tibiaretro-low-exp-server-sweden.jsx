import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-low-exp-server-sweden');
}

export default function TibiaretroLowExpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-low-exp-server-sweden" />;
}
