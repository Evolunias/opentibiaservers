import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-saintsot-server');
}

export default function NewSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="new-saintsot-server" />;
}
