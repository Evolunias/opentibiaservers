import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-ot');
}

export default function ActiveTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-ot" />;
}
