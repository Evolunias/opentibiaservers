import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-register');
}

export default function BestRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-realera-register" />;
}
