import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-bosses');
}

export default function OxygenotBossesKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-bosses" />;
}
