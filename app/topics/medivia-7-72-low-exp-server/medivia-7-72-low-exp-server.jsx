import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-72-low-exp-server');
}

export default function Medivia772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-72-low-exp-server" />;
}
