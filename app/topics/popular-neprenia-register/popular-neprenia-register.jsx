import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-register');
}

export default function PopularNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-register" />;
}
