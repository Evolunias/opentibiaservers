import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-high-exp-server');
}

export default function Neprenia772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-high-exp-server" />;
}
