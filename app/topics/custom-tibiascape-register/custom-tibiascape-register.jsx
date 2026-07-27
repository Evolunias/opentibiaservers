import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-register');
}

export default function CustomTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-register" />;
}
