import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-1-low-exp-server');
}

export default function Sabrehaven71LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-1-low-exp-server" />;
}
