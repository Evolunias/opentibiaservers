import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-7-6-low-exp-server');
}

export default function Sabrehaven76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-7-6-low-exp-server" />;
}
