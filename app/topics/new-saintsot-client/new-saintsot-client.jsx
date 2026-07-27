import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-client');
}

export default function NewSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-client" />;
}
