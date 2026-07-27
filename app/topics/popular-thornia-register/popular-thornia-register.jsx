import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thornia-register');
}

export default function PopularThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-thornia-register" />;
}
