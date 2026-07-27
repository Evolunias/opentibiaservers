import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-low-exp-server-uk');
}

export default function NostaltherLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-low-exp-server-uk" />;
}
