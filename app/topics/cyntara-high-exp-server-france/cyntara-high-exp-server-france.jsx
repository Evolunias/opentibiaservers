import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-high-exp-server-france');
}

export default function CyntaraHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-high-exp-server-france" />;
}
