import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-low-exp-server-north-america');
}

export default function NostaltherLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="nostalther-low-exp-server-north-america" />;
}
