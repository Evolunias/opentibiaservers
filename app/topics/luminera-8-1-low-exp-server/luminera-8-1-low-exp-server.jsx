import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-1-low-exp-server');
}

export default function Luminera81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-1-low-exp-server" />;
}
