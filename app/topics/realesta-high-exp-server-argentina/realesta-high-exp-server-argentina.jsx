import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-high-exp-server-argentina');
}

export default function RealestaHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="realesta-high-exp-server-argentina" />;
}
