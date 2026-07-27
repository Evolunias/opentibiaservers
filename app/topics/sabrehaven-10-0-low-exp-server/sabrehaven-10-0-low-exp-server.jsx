import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-10-0-low-exp-server');
}

export default function Sabrehaven100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-10-0-low-exp-server" />;
}
