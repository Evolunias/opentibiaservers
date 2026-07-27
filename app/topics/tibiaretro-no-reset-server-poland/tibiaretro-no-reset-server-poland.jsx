import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-no-reset-server-poland');
}

export default function TibiaretroNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-no-reset-server-poland" />;
}
