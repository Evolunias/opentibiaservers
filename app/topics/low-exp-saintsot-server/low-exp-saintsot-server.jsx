import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-saintsot-server');
}

export default function LowExpSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-saintsot-server" />;
}
