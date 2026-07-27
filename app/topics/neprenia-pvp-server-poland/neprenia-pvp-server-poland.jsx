import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-pvp-server-poland');
}

export default function NepreniaPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="neprenia-pvp-server-poland" />;
}
