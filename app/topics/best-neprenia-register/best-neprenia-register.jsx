import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-register');
}

export default function BestNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-register" />;
}
