import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-north-america-servers');
}

export default function NepreniaNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="neprenia-north-america-servers" />;
}
