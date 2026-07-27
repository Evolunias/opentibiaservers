import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-high-exp-server-uk');
}

export default function NostaltherHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-high-exp-server-uk" />;
}
