import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-7-72-low-exp-server');
}

export default function Luminera772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-7-72-low-exp-server" />;
}
