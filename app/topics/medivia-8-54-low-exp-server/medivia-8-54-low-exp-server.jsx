import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-8-54-low-exp-server');
}

export default function Medivia854LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-8-54-low-exp-server" />;
}
