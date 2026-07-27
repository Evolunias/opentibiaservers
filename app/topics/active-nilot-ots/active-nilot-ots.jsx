import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-ots');
}

export default function ActiveNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-ots" />;
}
