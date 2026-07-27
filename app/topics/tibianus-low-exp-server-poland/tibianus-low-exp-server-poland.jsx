import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-low-exp-server-poland');
}

export default function TibianusLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibianus-low-exp-server-poland" />;
}
