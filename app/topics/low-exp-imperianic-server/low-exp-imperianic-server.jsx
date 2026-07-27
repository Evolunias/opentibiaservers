import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-imperianic-server');
}

export default function LowExpImperianicServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-imperianic-server" />;
}
