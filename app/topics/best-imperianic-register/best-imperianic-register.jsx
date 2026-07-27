import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-imperianic-register');
}

export default function BestImperianicRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-imperianic-register" />;
}
