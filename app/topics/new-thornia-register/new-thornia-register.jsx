import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-thornia-register');
}

export default function NewThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-thornia-register" />;
}
