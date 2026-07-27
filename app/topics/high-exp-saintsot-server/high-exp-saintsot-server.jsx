import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-saintsot-server');
}

export default function HighExpSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-saintsot-server" />;
}
