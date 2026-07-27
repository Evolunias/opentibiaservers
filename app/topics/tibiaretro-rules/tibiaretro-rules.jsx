import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-rules');
}

export default function TibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-rules" />;
}
