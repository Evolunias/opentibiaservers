import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-register');
}

export default function LowrateTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-register" />;
}
