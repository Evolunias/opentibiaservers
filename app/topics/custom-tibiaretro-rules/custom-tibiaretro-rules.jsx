import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiaretro-rules');
}

export default function CustomTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiaretro-rules" />;
}
