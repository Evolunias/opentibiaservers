import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-register-usa');
}

export default function SeasonalRegisterUsaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-register-usa" />;
}
