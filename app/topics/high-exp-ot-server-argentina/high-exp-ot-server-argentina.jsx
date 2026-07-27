import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ot-server-argentina');
}

export default function HighExpOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ot-server-argentina" />;
}
