import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-low-exp-server-poland');
}

export default function ElderaLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-low-exp-server-poland" />;
}
