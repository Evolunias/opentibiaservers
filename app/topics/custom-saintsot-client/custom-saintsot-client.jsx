import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-client');
}

export default function CustomSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-client" />;
}
