import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-low-exp-server-uk');
}

export default function OlderaLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="oldera-low-exp-server-uk" />;
}
