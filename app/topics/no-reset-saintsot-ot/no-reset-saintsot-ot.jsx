import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-ot');
}

export default function NoResetSaintsotOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-ot" />;
}
