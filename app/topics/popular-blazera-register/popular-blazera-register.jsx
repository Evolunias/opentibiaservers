import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-blazera-register');
}

export default function PopularBlazeraRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-blazera-register" />;
}
