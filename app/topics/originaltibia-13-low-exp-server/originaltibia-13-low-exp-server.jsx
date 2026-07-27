import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-low-exp-server');
}

export default function Originaltibia13LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-low-exp-server" />;
}
