import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-register');
}

export default function PopularClassicusRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-register" />;
}
