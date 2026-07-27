import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-8-54-high-exp-server');
}

export default function Alastera854HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-8-54-high-exp-server" />;
}
