import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-register-latin-america');
}

export default function SeasonalRegisterLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-register-latin-america" />;
}
