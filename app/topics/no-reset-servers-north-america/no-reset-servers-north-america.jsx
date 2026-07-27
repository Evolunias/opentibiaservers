import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-servers-north-america');
}

export default function NoResetServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-servers-north-america" />;
}
