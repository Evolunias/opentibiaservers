import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-low-exp-server-mexico');
}

export default function CyntaraLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-low-exp-server-mexico" />;
}
