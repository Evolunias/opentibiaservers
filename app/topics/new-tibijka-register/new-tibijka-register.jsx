import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibijka-register');
}

export default function NewTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-tibijka-register" />;
}
