import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-chile-server');
}

export default function NepreniaChileServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-chile-server" />;
}
