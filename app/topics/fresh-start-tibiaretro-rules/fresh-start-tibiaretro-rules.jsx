import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiaretro-rules');
}

export default function FreshStartTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiaretro-rules" />;
}
