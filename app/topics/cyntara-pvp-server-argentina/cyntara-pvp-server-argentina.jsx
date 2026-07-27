import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-server-argentina');
}

export default function CyntaraPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-server-argentina" />;
}
