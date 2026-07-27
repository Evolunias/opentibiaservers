import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-low-exp-server-south-america');
}

export default function CyntaraLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-low-exp-server-south-america" />;
}
