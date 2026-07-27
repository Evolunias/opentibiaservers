import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-low-exp-server-uk');
}

export default function ElderaLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-low-exp-server-uk" />;
}
