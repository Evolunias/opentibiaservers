import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-germany');
}

export default function NepreniaPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-germany" />;
}
