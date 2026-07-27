import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-non-pvp-server-uk');
}

export default function CyntaraNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="cyntara-non-pvp-server-uk" />;
}
