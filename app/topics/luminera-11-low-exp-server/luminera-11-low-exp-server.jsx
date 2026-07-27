import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-11-low-exp-server');
}

export default function Luminera11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-11-low-exp-server" />;
}
