import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-ots');
}

export default function CustomZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-ots" />;
}
