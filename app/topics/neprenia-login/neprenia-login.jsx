import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-login');
}

export default function NepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="neprenia-login" />;
}
