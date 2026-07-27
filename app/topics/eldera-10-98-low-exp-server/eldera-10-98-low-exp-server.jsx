import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-10-98-low-exp-server');
}

export default function Eldera1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-10-98-low-exp-server" />;
}
