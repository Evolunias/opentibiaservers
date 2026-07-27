import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiaretro-rules');
}

export default function NewTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="new-tibiaretro-rules" />;
}
