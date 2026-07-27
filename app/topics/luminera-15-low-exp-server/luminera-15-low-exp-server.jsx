import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-15-low-exp-server');
}

export default function Luminera15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-15-low-exp-server" />;
}
