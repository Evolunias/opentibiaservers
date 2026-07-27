import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-13-low-exp-server');
}

export default function Luminera13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-13-low-exp-server" />;
}
