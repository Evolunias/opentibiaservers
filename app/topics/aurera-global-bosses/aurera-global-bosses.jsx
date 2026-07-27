import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-bosses');
}

export default function AureraGlobalBossesKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-bosses" />;
}
