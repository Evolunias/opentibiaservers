import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-baiak-server-south-america');
}

export default function ShadowcoresBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-baiak-server-south-america" />;
}
