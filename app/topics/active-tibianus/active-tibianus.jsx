import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibianus');
}

export default function ActiveTibianusKeywordPage() {
  return <StaticKeywordPage slug="active-tibianus" />;
}
