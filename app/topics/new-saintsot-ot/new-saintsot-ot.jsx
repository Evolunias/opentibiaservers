import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-ot');
}

export default function NewSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-ot" />;
}
