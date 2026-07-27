import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nilot');
}

export default function NoResetNilotKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nilot" />;
}
