import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot-ot');
}

export default function NewOxygenotOtKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot-ot" />;
}
