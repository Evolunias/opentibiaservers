import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-alternatives');
}

export default function DuraOnlineAlternativesKeywordPage() {
  return <StaticKeywordPage slug="dura-online-alternatives" />;
}
