import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realesta');
}

export default function NoResetRealestaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realesta" />;
}
