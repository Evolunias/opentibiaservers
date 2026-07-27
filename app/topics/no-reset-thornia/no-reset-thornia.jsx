import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia');
}

export default function NoResetThorniaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia" />;
}
