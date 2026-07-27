import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus-ots');
}

export default function ActiveTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus-ots" />;
}
