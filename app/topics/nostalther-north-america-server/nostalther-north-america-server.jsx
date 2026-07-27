import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-north-america-server');
}

export default function NostaltherNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-north-america-server" />;
}
