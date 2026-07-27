import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-register-south-america');
}

export default function SeasonalRegisterSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-register-south-america" />;
}
