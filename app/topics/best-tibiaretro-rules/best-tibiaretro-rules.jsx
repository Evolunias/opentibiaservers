import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiaretro-rules');
}

export default function BestTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="best-tibiaretro-rules" />;
}
