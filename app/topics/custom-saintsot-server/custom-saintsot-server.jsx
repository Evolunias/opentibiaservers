import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-saintsot-server');
}

export default function CustomSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-saintsot-server" />;
}
