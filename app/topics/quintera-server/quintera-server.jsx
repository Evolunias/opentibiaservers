import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('quintera-server');
}

export default function QuinteraServerKeywordPage() {
  return <StaticKeywordPage slug="quintera-server" />;
}
