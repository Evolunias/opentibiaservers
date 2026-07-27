import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-register');
}

export default function TibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibijka-register" />;
}
