import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-ots');
}

export default function NewZuneraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-ots" />;
}
