import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-bosses');
}

export default function NostaltherBossesKeywordPage() {
  return <StaticKeywordPage slug="nostalther-bosses" />;
}
