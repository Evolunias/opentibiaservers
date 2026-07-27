import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-client');
}

export default function NoResetSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-client" />;
}
