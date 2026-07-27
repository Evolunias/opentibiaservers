import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiaretro-rules');
}

export default function PopularTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiaretro-rules" />;
}
