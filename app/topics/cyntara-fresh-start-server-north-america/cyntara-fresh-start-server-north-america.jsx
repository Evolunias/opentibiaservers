import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-fresh-start-server-north-america');
}

export default function CyntaraFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-fresh-start-server-north-america" />;
}
