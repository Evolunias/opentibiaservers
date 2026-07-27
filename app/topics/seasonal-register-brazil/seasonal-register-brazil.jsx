import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-register-brazil');
}

export default function SeasonalRegisterBrazilKeywordPage() {
  return <StaticKeywordPage slug="seasonal-register-brazil" />;
}
