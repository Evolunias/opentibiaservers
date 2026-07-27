import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-north-america-server');
}

export default function NepreniaNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-north-america-server" />;
}
