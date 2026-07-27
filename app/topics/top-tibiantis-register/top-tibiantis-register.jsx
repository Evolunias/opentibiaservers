import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-register');
}

export default function TopTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-register" />;
}
