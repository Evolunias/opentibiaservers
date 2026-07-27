import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-originaltibia');
}

export default function FreshStartOriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-originaltibia" />;
}
