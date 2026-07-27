import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus');
}

export default function NewClassicusKeywordPage() {
  return <StaticKeywordPage slug="new-classicus" />;
}
