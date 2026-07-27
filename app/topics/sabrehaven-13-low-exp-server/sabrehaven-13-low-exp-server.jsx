import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-13-low-exp-server');
}

export default function Sabrehaven13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-13-low-exp-server" />;
}
