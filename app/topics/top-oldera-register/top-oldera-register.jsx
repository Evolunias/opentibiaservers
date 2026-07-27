import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-register');
}

export default function TopOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-register" />;
}
