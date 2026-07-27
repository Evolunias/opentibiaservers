import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp-server-usa');
}

export default function CyntaraPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp-server-usa" />;
}
