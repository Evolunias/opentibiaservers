import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-north-america-servers');
}

export default function NostaltherNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-north-america-servers" />;
}
