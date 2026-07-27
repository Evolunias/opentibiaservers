import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-client');
}

export default function NepreniaClientKeywordPage() {
  return <StaticKeywordPage slug="neprenia-client" />;
}
