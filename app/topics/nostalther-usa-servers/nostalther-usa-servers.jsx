import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-usa-servers');
}

export default function NostaltherUsaServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-usa-servers" />;
}
