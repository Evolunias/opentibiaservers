import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-register');
}

export default function CurrentTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-register" />;
}
