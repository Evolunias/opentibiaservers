import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiascape-register');
}

export default function BestTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-tibiascape-register" />;
}
