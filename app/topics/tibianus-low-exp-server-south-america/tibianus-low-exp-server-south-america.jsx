import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-low-exp-server-south-america');
}

export default function TibianusLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-low-exp-server-south-america" />;
}
