import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-saintsot-register');
}

export default function BestSaintsotRegisterKeywordPage() {
  return <StaticKeywordPage slug="best-saintsot-register" />;
}
