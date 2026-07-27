import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-open-tibia-server-list');
}

export default function BestOpenTibiaServerListKeywordPage() {
  return <StaticKeywordPage slug="best-open-tibia-server-list" />;
}
