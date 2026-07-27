import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-retro-server-south-america');
}

export default function NepreniaRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="neprenia-retro-server-south-america" />;
}
