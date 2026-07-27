import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thornia-register');
}

export default function ActiveThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-thornia-register" />;
}
