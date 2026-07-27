import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-poland-server');
}

export default function NepreniaPolandServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-poland-server" />;
}
