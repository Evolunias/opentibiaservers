import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-13-low-exp-server');
}

export default function Blazera13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-13-low-exp-server" />;
}
