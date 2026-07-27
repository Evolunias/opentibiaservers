import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-server-south-america');
}

export default function NoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-server-south-america" />;
}
