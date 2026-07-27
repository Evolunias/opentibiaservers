import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('seasonal-register-poland');
}

export default function SeasonalRegisterPolandKeywordPage() {
  return <StaticKeywordPage slug="seasonal-register-poland" />;
}
