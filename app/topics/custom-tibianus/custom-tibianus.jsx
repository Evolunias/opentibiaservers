import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibianus');
}

export default function CustomTibianusKeywordPage() {
  return <StaticKeywordPage slug="custom-tibianus" />;
}
