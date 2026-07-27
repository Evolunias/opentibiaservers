import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-14-low-exp-server');
}

export default function Sabrehaven14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-14-low-exp-server" />;
}
