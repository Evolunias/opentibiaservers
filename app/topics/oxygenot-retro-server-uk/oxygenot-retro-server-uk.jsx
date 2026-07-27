import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-retro-server-uk');
}

export default function OxygenotRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-retro-server-uk" />;
}
