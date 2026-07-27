import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot');
}

export default function NewZuneraOtKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot" />;
}
