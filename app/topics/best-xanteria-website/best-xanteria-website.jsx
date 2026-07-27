import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-xanteria-website');
}

export default function BestXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="best-xanteria-website" />;
}
