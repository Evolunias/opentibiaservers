import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-9-6-low-exp-server');
}

export default function Sabrehaven96LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-9-6-low-exp-server" />;
}
