import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-client-south-america');
}

export default function NoResetClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-client-south-america" />;
}
