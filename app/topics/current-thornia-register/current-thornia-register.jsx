import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-register');
}

export default function CurrentThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-register" />;
}
