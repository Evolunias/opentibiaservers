import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-demolidores-register');
}

export default function CurrentDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-demolidores-register" />;
}
