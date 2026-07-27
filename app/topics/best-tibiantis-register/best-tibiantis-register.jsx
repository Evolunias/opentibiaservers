import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-register');
}

export default function BestTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-register" />;
}
