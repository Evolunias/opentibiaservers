import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-register-canada');
}

export default function SeasonalRegisterCanadaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-register-canada" />;
}
