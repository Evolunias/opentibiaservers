import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-germany-server');
}

export default function NostaltherGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-germany-server" />;
}
