import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-register-south-america');
}

export default function NoResetRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-register-south-america" />;
}
