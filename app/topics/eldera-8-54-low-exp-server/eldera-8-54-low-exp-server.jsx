import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-low-exp-server');
}

export default function Eldera854LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-low-exp-server" />;
}
