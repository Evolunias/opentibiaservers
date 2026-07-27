import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-register');
}

export default function TopTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-register" />;
}
