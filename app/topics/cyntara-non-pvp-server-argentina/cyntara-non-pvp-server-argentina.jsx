import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-non-pvp-server-argentina');
}

export default function CyntaraNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-non-pvp-server-argentina" />;
}
