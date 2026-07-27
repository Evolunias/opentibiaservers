import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-register');
}

export default function PopularTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-register" />;
}
