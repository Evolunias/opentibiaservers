import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-register');
}

export default function CustomTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-register" />;
}
