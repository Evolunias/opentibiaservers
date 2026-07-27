import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-season');
}

export default function OtServersSeasonKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-season" />;
}
