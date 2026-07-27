import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-ot-server');
}

export default function OfficialSaintsotOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-ot-server" />;
}
