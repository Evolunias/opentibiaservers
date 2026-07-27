import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-ot');
}

export default function NewNilotOtKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-ot" />;
}
