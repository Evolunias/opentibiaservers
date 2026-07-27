import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-13-high-exp-server');
}

export default function Originaltibia13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-13-high-exp-server" />;
}
