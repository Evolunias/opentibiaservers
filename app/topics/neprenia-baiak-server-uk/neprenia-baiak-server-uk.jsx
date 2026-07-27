import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-baiak-server-uk');
}

export default function NepreniaBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-baiak-server-uk" />;
}
