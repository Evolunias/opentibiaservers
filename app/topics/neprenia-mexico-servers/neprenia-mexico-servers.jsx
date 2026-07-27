import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-mexico-servers');
}

export default function NepreniaMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-mexico-servers" />;
}
