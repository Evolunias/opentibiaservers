import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-low-exp-server-france');
}

export default function CyntaraLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-low-exp-server-france" />;
}
