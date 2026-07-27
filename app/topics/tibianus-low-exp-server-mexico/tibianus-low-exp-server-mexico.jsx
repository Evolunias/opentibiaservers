import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-low-exp-server-mexico');
}

export default function TibianusLowExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibianus-low-exp-server-mexico" />;
}
