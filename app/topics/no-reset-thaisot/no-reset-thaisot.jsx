import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thaisot');
}

export default function NoResetThaisotKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thaisot" />;
}
