import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-register-uk');
}

export default function SeasonalRegisterUkKeywordPage() {
  return <StaticKeywordPage slug="seasonal-register-uk" />;
}
