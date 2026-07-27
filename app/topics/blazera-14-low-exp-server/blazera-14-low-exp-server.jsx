import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-14-low-exp-server');
}

export default function Blazera14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-14-low-exp-server" />;
}
