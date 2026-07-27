import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-low-exp-server-uk');
}

export default function ImperianicLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="imperianic-low-exp-server-uk" />;
}
