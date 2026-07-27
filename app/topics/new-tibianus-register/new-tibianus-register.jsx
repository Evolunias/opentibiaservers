import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus-register');
}

export default function NewTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus-register" />;
}
