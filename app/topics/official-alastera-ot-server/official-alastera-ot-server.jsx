import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-alastera-ot-server');
}

export default function OfficialAlasteraOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-alastera-ot-server" />;
}
