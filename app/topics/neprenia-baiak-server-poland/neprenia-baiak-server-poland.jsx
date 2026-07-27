import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-baiak-server-poland');
}

export default function NepreniaBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-baiak-server-poland" />;
}
