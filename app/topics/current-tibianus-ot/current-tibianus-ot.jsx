import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-ot');
}

export default function CurrentTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-ot" />;
}
