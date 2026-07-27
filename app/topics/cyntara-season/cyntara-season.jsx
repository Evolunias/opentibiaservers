import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-season');
}

export default function CyntaraSeasonKeywordPage() {
  return <StaticKeywordPage slug="cyntara-season" />;
}
