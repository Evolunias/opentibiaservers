import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-register');
}

export default function OriginaltibiaRegisterKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-register" />;
}
