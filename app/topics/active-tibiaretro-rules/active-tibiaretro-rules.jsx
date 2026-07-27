import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiaretro-rules');
}

export default function ActiveTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="active-tibiaretro-rules" />;
}
