import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-10-0-low-exp-server');
}

export default function Luminera100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="luminera-10-0-low-exp-server" />;
}
