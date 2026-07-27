import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-ot');
}

export default function NoResetTibiaretroOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-ot" />;
}
