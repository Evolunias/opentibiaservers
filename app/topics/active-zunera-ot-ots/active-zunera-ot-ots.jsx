import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-ots');
}

export default function ActiveZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-ots" />;
}
