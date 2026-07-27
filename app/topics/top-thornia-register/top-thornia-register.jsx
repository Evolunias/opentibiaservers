import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thornia-register');
}

export default function TopThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-thornia-register" />;
}
