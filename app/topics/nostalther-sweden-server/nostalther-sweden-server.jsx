import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-sweden-server');
}

export default function NostaltherSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-sweden-server" />;
}
