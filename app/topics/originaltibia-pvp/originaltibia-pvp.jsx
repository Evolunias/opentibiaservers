import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp');
}

export default function OriginaltibiaPvpKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp" />;
}
