import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-originaltibia-register');
}

export default function CustomOriginaltibiaRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-originaltibia-register" />;
}
