import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-ot-server');
}

export default function NewSaintsotOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-ot-server" />;
}
