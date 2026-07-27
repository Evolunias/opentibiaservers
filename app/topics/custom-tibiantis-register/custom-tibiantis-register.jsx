import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiantis-register');
}

export default function CustomTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiantis-register" />;
}
