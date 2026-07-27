import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-baiak-server-south-america');
}

export default function MistOfDeathBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-baiak-server-south-america" />;
}
