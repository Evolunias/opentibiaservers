import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-ots');
}

export default function NewSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-ots" />;
}
