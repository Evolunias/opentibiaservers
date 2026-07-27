import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-register-sweden');
}

export default function SeasonalRegisterSwedenKeywordPage() {
  return <StaticKeywordPage slug="seasonal-register-sweden" />;
}
