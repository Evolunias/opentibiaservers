import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-bosses');
}

export default function NilotBossesKeywordPage() {
  return <StaticKeywordPage slug="nilot-bosses" />;
}
