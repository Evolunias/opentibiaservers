import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-login');
}

export default function BestNoxiousotLoginKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-login" />;
}
