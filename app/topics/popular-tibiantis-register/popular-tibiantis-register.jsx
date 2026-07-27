import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-register');
}

export default function PopularTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-register" />;
}
