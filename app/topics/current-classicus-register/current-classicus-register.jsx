import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-register');
}

export default function CurrentClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-register" />;
}
