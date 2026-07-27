import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-client-north-america');
}

export default function NoResetClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-client-north-america" />;
}
