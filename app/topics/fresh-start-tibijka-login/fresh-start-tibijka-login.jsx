import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibijka-login');
}

export default function FreshStartTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibijka-login" />;
}
