import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-brazil-server');
}

export default function NostaltherBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-brazil-server" />;
}
