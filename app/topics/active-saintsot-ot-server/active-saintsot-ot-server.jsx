import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-ot-server');
}

export default function ActiveSaintsotOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-ot-server" />;
}
