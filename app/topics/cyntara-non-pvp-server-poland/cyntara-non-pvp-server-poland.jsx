import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-non-pvp-server-poland');
}

export default function CyntaraNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-non-pvp-server-poland" />;
}
