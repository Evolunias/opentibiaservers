import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-ot');
}

export default function CustomTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-ot" />;
}
