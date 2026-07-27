import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-ot');
}

export default function NewZuneraOtOtKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-ot" />;
}
