import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-sweden-servers');
}

export default function NepreniaSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-sweden-servers" />;
}
