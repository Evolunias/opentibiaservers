import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-low-exp-server-mexico');
}

export default function OlderaLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="oldera-low-exp-server-mexico" />;
}
