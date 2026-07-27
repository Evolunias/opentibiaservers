import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-ot-server');
}

export default function OfficialKasteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-ot-server" />;
}
