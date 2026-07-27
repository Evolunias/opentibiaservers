import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-register');
}

export default function ThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="thornia-register" />;
}
