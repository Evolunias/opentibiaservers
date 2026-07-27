import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-8-0-low-exp-server');
}

export default function Luminera80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-8-0-low-exp-server" />;
}
