import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-south-america-server');
}

export default function NepreniaSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-south-america-server" />;
}
