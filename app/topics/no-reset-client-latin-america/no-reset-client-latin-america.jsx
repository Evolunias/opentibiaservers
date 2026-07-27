import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-client-latin-america');
}

export default function NoResetClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-client-latin-america" />;
}
