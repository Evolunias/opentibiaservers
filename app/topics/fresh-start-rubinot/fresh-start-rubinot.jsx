import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-rubinot');
}

export default function FreshStartRubinotKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-rubinot" />;
}
