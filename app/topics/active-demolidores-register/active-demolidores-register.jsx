import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-demolidores-register');
}

export default function ActiveDemolidoresRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-demolidores-register" />;
}
