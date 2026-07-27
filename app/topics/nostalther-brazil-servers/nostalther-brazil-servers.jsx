import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-brazil-servers');
}

export default function NostaltherBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-brazil-servers" />;
}
