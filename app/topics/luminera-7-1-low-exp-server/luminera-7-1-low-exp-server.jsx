import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-1-low-exp-server');
}

export default function Luminera71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-1-low-exp-server" />;
}
