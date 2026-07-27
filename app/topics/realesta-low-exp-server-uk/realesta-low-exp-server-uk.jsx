import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-low-exp-server-uk');
}

export default function RealestaLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="realesta-low-exp-server-uk" />;
}
