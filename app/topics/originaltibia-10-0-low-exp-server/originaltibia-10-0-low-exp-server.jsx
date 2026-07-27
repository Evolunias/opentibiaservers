import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-10-0-low-exp-server');
}

export default function Originaltibia100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-10-0-low-exp-server" />;
}
