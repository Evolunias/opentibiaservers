import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-register');
}

export default function DemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="demolidores-register" />;
}
