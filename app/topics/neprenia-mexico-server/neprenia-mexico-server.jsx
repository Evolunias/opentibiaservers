import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-mexico-server');
}

export default function NepreniaMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-mexico-server" />;
}
