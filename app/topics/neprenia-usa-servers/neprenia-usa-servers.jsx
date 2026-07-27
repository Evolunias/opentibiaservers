import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-usa-servers');
}

export default function NepreniaUsaServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-usa-servers" />;
}
