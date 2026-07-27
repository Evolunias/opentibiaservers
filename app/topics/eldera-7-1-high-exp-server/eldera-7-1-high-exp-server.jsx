import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-1-high-exp-server');
}

export default function Eldera71HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-1-high-exp-server" />;
}
