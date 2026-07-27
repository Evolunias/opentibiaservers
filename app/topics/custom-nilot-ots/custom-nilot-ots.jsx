import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-ots');
}

export default function CustomNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-ots" />;
}
