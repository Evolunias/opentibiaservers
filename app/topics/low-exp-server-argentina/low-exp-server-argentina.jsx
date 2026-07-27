import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-server-argentina');
}

export default function LowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="low-exp-server-argentina" />;
}
