import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-saintsot-server');
}

export default function FreshStartSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-saintsot-server" />;
}
