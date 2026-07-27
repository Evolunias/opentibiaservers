import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-register');
}

export default function CustomTibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-register" />;
}
