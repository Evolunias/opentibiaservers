import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-7-4-low-exp-server');
}

export default function Medivia74LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-7-4-low-exp-server" />;
}
