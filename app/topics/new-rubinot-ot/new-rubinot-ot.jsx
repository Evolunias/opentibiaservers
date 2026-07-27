import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot-ot');
}

export default function NewRubinotOtKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot-ot" />;
}
