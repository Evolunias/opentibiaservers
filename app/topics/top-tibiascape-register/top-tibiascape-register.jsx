import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiascape-register');
}

export default function TopTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-tibiascape-register" />;
}
