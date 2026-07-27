import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-12-low-exp-server');
}

export default function Originaltibia12LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-12-low-exp-server" />;
}
