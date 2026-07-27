import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-register');
}

export default function BestXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-register" />;
}
