import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-fresh-start-server-list');
}

export default function Tibia74FreshStartServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-fresh-start-server-list" />;
}
