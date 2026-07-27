import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus');
}

export default function TibianusKeywordPage() {
  return <StaticKeywordPage slug="tibianus" />;
}
