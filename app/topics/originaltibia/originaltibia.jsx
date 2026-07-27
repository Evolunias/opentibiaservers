import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia');
}

export default function OriginaltibiaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia" />;
}
