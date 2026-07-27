import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-server-europe');
}

export default function CyntaraPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-server-europe" />;
}
