import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-sabrehaven-ot-server');
}

export default function OfficialSabrehavenOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-sabrehaven-ot-server" />;
}
