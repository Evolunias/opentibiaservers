import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-south-america');
}

export default function NepreniaFreshStartServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-south-america" />;
}
