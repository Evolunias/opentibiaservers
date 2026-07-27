import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('serenity-baiak-server-south-america');
}

export default function SerenityBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="serenity-baiak-server-south-america" />;
}
