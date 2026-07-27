import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-demolidores-register');
}

export default function PopularDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-demolidores-register" />;
}
