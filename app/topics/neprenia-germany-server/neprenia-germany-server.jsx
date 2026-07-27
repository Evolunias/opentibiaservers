import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-germany-server');
}

export default function NepreniaGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-germany-server" />;
}
