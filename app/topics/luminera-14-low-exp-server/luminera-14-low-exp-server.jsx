import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-14-low-exp-server');
}

export default function Luminera14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-14-low-exp-server" />;
}
