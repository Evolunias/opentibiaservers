import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-bosses');
}

export default function SerenityBossesKeywordPage() {
  return <StaticKeywordPage slug="serenity-bosses" />;
}
