import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-client');
}

export default function CurrentSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-client" />;
}
