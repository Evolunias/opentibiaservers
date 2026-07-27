import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-register');
}

export default function ActiveTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-register" />;
}
