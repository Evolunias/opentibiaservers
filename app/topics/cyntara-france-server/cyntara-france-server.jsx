import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-france-server');
}

export default function CyntaraFranceServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-france-server" />;
}
