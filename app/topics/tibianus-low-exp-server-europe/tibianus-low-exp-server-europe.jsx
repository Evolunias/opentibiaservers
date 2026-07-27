import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-low-exp-server-europe');
}

export default function TibianusLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibianus-low-exp-server-europe" />;
}
