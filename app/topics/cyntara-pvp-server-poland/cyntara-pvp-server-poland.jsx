import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-server-poland');
}

export default function CyntaraPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-server-poland" />;
}
