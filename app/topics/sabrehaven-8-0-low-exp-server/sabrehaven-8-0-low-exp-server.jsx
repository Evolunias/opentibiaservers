import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-8-0-low-exp-server');
}

export default function Sabrehaven80LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-8-0-low-exp-server" />;
}
