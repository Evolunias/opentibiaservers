import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiaretro-rules');
}

export default function CurrentTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="current-tibiaretro-rules" />;
}
