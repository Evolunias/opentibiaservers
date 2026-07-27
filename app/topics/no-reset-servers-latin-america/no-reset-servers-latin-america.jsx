import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-servers-latin-america');
}

export default function NoResetServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-servers-latin-america" />;
}
