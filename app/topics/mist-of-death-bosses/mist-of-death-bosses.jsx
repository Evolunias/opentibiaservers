import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-bosses');
}

export default function MistOfDeathBossesKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-bosses" />;
}
