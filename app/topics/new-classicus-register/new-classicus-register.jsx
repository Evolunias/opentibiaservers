import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-classicus-register');
}

export default function NewClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-classicus-register" />;
}
