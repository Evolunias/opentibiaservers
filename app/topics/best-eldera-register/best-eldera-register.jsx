import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-register');
}

export default function BestElderaRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-register" />;
}
