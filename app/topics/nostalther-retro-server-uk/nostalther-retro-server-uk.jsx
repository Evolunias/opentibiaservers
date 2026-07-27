import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-retro-server-uk');
}

export default function NostaltherRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-retro-server-uk" />;
}
