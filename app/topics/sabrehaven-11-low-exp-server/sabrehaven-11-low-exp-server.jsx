import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-11-low-exp-server');
}

export default function Sabrehaven11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-11-low-exp-server" />;
}
