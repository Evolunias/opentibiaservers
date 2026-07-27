import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-ot');
}

export default function CurrentSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-ot" />;
}
