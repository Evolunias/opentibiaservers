import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-register');
}

export default function OtlandServerGalaRegisterKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-register" />;
}
