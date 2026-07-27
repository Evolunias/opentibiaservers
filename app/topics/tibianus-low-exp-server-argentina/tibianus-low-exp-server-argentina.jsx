import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-low-exp-server-argentina');
}

export default function TibianusLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibianus-low-exp-server-argentina" />;
}
