import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-low-exp-server-poland');
}

export default function OlderaLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="oldera-low-exp-server-poland" />;
}
