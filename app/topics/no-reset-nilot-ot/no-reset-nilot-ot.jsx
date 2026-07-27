import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot-ot');
}

export default function NoResetNilotOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot-ot" />;
}
