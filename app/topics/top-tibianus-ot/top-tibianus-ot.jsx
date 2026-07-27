import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-ot');
}

export default function TopTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-ot" />;
}
