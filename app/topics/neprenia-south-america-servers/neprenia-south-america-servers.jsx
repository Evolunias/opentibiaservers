import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-south-america-servers');
}

export default function NepreniaSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-south-america-servers" />;
}
