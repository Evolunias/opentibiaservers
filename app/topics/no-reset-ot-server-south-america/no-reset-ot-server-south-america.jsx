import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ot-server-south-america');
}

export default function NoResetOtServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ot-server-south-america" />;
}
