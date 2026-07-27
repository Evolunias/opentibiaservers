import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot');
}

export default function BestNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot" />;
}
