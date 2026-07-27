import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-client');
}

export default function ActiveSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-client" />;
}
