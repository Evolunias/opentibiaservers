import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-high-exp-server-south-america');
}

export default function CyntaraHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-high-exp-server-south-america" />;
}
