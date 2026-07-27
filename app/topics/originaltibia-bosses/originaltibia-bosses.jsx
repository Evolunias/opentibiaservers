import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-bosses');
}

export default function OriginaltibiaBossesKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-bosses" />;
}
