import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-kasteria-ot-server');
}

export default function ActiveKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-kasteria-ot-server" />;
}
