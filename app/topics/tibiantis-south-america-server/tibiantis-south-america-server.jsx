import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-south-america-server');
}

export default function TibiantisSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-south-america-server" />;
}
