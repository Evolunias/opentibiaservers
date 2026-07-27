import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-bosses');
}

export default function ImperianicBossesKeywordPage() {
  return <StaticKeywordPage slug="imperianic-bosses" />;
}
