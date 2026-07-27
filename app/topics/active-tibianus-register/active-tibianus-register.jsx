import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-register');
}

export default function ActiveTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-register" />;
}
