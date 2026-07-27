import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-demolidores-register');
}

export default function BestDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-demolidores-register" />;
}
