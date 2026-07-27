import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-server');
}

export default function NostaltherServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-server" />;
}
