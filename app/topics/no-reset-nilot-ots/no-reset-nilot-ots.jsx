import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-ots');
}

export default function NoResetNilotOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-ots" />;
}
