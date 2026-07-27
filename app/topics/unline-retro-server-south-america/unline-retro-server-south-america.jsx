import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-retro-server-south-america');
}

export default function UnlineRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="unline-retro-server-south-america" />;
}
