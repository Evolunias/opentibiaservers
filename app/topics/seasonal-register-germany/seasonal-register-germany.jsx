import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-register-germany');
}

export default function SeasonalRegisterGermanyKeywordPage() {
  return <StaticKeywordPage slug="seasonal-register-germany" />;
}
