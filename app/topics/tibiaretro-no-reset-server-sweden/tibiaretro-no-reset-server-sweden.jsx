import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-no-reset-server-sweden');
}

export default function TibiaretroNoResetServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-no-reset-server-sweden" />;
}
