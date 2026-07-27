import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-client');
}

export default function FreshStartSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-client" />;
}
