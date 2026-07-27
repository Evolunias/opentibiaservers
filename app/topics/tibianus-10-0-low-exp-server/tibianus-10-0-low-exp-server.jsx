import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-10-0-low-exp-server');
}

export default function Tibianus100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-10-0-low-exp-server" />;
}
