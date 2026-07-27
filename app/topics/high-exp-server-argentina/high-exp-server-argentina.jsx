import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-argentina');
}

export default function HighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-argentina" />;
}
