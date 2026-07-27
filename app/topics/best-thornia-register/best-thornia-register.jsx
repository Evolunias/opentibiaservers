import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thornia-register');
}

export default function BestThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-thornia-register" />;
}
