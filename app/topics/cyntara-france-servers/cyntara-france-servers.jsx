import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-france-servers');
}

export default function CyntaraFranceServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-france-servers" />;
}
