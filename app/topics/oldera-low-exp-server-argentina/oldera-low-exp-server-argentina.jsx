import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-low-exp-server-argentina');
}

export default function OlderaLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="oldera-low-exp-server-argentina" />;
}
