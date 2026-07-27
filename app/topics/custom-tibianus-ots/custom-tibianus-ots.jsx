import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus-ots');
}

export default function CustomTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus-ots" />;
}
