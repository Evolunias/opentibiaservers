import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-11-low-exp-server');
}

export default function Originaltibia11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-11-low-exp-server" />;
}
