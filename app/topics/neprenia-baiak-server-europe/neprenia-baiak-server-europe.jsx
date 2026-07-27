import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-baiak-server-europe');
}

export default function NepreniaBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-baiak-server-europe" />;
}
