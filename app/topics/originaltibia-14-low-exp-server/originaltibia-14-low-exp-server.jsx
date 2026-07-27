import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-14-low-exp-server');
}

export default function Originaltibia14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-14-low-exp-server" />;
}
