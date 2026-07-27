import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibianus');
}

export default function FreshStartTibianusKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibianus" />;
}
