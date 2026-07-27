import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-ot-server');
}

export default function CustomSaintsotOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-ot-server" />;
}
