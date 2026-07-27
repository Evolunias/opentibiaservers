import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-south-america-server');
}

export default function ClassicusSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-south-america-server" />;
}
