import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiaretro-rules');
}

export default function NoResetTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiaretro-rules" />;
}
