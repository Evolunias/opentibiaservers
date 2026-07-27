import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-high-exp');
}

export default function OriginaltibiaHighExpKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-high-exp" />;
}
