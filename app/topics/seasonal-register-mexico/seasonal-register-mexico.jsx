import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-register-mexico');
}

export default function SeasonalRegisterMexicoKeywordPage() {
  return <StaticKeywordPage slug="seasonal-register-mexico" />;
}
