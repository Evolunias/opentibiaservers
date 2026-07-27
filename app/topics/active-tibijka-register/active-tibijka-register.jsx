import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-register');
}

export default function ActiveTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-register" />;
}
