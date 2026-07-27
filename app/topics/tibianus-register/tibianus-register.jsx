import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-register');
}

export default function TibianusRegisterKeywordPage() {
  return <StaticKeywordPage slug="tibianus-register" />;
}
