import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-poland-servers');
}

export default function NepreniaPolandServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-poland-servers" />;
}
