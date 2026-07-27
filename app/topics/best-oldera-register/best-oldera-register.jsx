import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-register');
}

export default function BestOlderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-register" />;
}
