import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiascape-register');
}

export default function PopularTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiascape-register" />;
}
