import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-ot');
}

export default function NewTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-ot" />;
}
