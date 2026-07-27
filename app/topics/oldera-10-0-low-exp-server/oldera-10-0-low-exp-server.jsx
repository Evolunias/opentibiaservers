import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-10-0-low-exp-server');
}

export default function Oldera100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="oldera-10-0-low-exp-server" />;
}
