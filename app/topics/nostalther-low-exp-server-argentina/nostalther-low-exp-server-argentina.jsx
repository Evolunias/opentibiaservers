import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-low-exp-server-argentina');
}

export default function NostaltherLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-low-exp-server-argentina" />;
}
