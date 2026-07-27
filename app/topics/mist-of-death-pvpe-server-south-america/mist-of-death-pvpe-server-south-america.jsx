import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvpe-server-south-america');
}

export default function MistOfDeathPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvpe-server-south-america" />;
}
