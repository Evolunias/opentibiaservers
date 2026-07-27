import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-retro-server-uk');
}

export default function ImperianicRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-retro-server-uk" />;
}
