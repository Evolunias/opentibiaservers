import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-saintsot-server');
}

export default function ActiveSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="active-saintsot-server" />;
}
