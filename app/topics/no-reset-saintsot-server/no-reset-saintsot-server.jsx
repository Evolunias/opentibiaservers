import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-server');
}

export default function NoResetSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-server" />;
}
