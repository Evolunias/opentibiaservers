import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-register');
}

export default function BestTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-register" />;
}
