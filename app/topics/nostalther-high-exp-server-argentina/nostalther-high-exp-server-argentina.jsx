import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-high-exp-server-argentina');
}

export default function NostaltherHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-high-exp-server-argentina" />;
}
