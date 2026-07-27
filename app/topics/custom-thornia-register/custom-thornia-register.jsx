import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thornia-register');
}

export default function CustomThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-thornia-register" />;
}
