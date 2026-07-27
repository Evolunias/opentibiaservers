import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-ot');
}

export default function CustomNilotOtKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-ot" />;
}
