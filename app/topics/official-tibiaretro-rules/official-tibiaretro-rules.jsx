import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiaretro-rules');
}

export default function OfficialTibiaretroRulesKeywordPage() {
  return <StaticKeywordPage slug="official-tibiaretro-rules" />;
}
