import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-low-exp-server-uk');
}

export default function RealeraLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="realera-low-exp-server-uk" />;
}
