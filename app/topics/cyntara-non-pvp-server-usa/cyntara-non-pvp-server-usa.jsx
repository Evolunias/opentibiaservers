import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-non-pvp-server-usa');
}

export default function CyntaraNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-non-pvp-server-usa" />;
}
