import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-register-france');
}

export default function SeasonalRegisterFranceKeywordPage() {
  return <StaticKeywordPage slug="seasonal-register-france" />;
}
