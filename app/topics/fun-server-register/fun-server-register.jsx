import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fun-server-register');
}

export default function FunServerRegisterKeywordPage() {
  return <StaticKeywordPage slug="fun-server-register" />;
}
