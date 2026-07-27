import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-baiak-server-france');
}

export default function NepreniaBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="neprenia-baiak-server-france" />;
}
