import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-argentina-server');
}

export default function NostaltherArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-argentina-server" />;
}
