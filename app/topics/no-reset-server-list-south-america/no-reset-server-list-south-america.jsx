import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-list-south-america');
}

export default function NoResetServerListSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-list-south-america" />;
}
