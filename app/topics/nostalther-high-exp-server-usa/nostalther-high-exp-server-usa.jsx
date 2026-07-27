import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-high-exp-server-usa');
}

export default function NostaltherHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-high-exp-server-usa" />;
}
