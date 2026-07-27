import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-oxygenot');
}

export default function NewOxygenotKeywordPage() {
  return <StaticKeywordPage slug="new-oxygenot" />;
}
