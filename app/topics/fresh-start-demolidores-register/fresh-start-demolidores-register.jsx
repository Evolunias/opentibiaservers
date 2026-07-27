import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-demolidores-register');
}

export default function FreshStartDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-demolidores-register" />;
}
