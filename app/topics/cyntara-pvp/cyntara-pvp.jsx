import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-pvp');
}

export default function CyntaraPvpKeywordPage() {
  return <StaticKeywordPage slug="cyntara-pvp" />;
}
