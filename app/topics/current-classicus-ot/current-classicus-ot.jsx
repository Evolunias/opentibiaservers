import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-ot');
}

export default function CurrentClassicusOtKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-ot" />;
}
