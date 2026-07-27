import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-15-low-exp-server');
}

export default function Blazera15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-15-low-exp-server" />;
}
