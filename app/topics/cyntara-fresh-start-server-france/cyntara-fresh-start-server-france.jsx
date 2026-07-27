import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-france');
}

export default function CyntaraFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-france" />;
}
