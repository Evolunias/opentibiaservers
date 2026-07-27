import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-kasteria');
}

export default function NoResetKasteriaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-kasteria" />;
}
