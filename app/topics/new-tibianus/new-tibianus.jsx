import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibianus');
}

export default function NewTibianusKeywordPage() {
  return <StaticKeywordPage slug="new-tibianus" />;
}
