import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-low-exp-server-usa');
}

export default function NostaltherLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-low-exp-server-usa" />;
}
