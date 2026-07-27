import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolera-ot-server');
}

export default function OfficialEvoleraOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-evolera-ot-server" />;
}
