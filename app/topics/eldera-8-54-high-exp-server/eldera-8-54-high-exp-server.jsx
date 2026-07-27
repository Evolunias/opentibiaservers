import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-high-exp-server');
}

export default function Eldera854HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-high-exp-server" />;
}
