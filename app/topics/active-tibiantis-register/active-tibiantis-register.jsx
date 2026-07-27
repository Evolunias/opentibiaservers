import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiantis-register');
}

export default function ActiveTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-tibiantis-register" />;
}
