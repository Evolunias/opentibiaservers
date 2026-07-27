import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiaretro-rules');
}

export default function LowrateTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiaretro-rules" />;
}
