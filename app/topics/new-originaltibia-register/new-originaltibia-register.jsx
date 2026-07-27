import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-originaltibia-register');
}

export default function NewOriginaltibiaRegisterKeywordPage() {
  return <StaticKeywordPage slug="new-originaltibia-register" />;
}
