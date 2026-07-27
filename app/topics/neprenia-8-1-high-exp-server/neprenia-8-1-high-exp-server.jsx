import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-8-1-high-exp-server');
}

export default function Neprenia81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-8-1-high-exp-server" />;
}
