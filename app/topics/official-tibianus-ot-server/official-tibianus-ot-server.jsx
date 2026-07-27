import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibianus-ot-server');
}

export default function OfficialTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-tibianus-ot-server" />;
}
