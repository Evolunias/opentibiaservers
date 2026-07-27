import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-status');
}

export default function NepreniaStatusKeywordPage() {
  return <StaticKeywordPage slug="neprenia-status" />;
}
