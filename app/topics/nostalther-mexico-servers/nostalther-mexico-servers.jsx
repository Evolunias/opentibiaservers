import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-mexico-servers');
}

export default function NostaltherMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="nostalther-mexico-servers" />;
}
