import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-ot-server');
}

export default function CurrentSaintsotOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-ot-server" />;
}
