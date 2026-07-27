import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-register');
}

export default function NewTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-register" />;
}
