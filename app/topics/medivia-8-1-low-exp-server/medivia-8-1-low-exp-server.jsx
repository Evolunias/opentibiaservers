import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-1-low-exp-server');
}

export default function Medivia81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-1-low-exp-server" />;
}
