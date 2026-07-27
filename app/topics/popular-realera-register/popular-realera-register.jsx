import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-register');
}

export default function PopularRealeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-register" />;
}
