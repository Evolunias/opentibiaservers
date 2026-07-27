import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiascape-register');
}

export default function CurrentTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-tibiascape-register" />;
}
