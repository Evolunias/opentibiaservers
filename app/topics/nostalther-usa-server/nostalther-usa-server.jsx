import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-usa-server');
}

export default function NostaltherUsaServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-usa-server" />;
}
