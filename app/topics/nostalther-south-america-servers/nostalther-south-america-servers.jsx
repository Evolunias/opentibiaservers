import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-south-america-servers');
}

export default function NostaltherSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-south-america-servers" />;
}
