import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-retro-server-uk');
}

export default function RealestaRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-retro-server-uk" />;
}
