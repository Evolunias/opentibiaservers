import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-no-reset-server-south-america');
}

export default function TibianusNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-no-reset-server-south-america" />;
}
