import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-europe');
}

export default function NepreniaPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-europe" />;
}
