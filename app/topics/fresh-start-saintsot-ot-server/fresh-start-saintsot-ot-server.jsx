import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-ot-server');
}

export default function FreshStartSaintsotOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-ot-server" />;
}
