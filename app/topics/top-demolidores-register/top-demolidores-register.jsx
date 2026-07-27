import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-demolidores-register');
}

export default function TopDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-demolidores-register" />;
}
