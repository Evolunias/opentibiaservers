import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-register');
}

export default function PopularNilotRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-register" />;
}
