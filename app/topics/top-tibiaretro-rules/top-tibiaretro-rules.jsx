import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiaretro-rules');
}

export default function TopTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="top-tibiaretro-rules" />;
}
