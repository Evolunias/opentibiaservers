import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-status');
}

export default function OriginaltibiaStatusKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-status" />;
}
