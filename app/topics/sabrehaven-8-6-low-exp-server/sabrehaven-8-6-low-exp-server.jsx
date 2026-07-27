import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-6-low-exp-server');
}

export default function Sabrehaven86LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-6-low-exp-server" />;
}
