import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiascape-register');
}

export default function LowrateTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiascape-register" />;
}
