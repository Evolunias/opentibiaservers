import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-register-argentina');
}

export default function SeasonalRegisterArgentinaKeywordPage() {
  return <StaticKeywordPage slug="seasonal-register-argentina" />;
}
