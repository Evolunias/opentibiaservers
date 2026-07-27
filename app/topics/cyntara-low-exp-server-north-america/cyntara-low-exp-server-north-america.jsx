import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-low-exp-server-north-america');
}

export default function CyntaraLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-low-exp-server-north-america" />;
}
