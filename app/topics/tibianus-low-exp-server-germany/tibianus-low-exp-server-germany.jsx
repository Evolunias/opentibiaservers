import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-low-exp-server-germany');
}

export default function TibianusLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibianus-low-exp-server-germany" />;
}
