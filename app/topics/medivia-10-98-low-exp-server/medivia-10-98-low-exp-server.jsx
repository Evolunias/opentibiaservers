import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-10-98-low-exp-server');
}

export default function Medivia1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-10-98-low-exp-server" />;
}
