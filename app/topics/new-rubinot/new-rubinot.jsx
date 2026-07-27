import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-rubinot');
}

export default function NewRubinotKeywordPage() {
  return <StaticKeywordPage slug="new-rubinot" />;
}
