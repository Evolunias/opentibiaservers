import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-15-low-exp-server');
}

export default function Originaltibia15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-15-low-exp-server" />;
}
