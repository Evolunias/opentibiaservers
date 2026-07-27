import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-no-reset-server-germany');
}

export default function TibiaretroNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-no-reset-server-germany" />;
}
