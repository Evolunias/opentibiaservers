import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-demolidores-register');
}

export default function NewDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-demolidores-register" />;
}
