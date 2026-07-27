import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiantis-register');
}

export default function NewTibiantisRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-tibiantis-register" />;
}
