import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-4-low-exp-server');
}

export default function Luminera84LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-4-low-exp-server" />;
}
