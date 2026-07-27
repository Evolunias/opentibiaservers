import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-mexico-server');
}

export default function NostaltherMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-mexico-server" />;
}
