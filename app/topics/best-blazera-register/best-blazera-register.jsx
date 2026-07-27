import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-blazera-register');
}

export default function BestBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-blazera-register" />;
}
