import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-imperianic');
}

export default function NewImperianicKeywordPage() {
  return <StaticKeywordPage slug="new-imperianic" />;
}
