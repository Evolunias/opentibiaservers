import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-ot');
}

export default function ActiveNilotOtKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-ot" />;
}
