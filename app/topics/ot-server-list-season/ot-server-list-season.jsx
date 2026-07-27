import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-server-list-season');
}

export default function OtServerListSeasonKeywordPage() {
  return <StaticKeywordPage slug="ot-server-list-season" />;
}
