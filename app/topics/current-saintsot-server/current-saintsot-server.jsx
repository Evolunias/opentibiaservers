import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-server');
}

export default function CurrentSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-server" />;
}
