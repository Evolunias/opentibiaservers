import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-non-pvp-server-europe');
}

export default function CyntaraNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-non-pvp-server-europe" />;
}
