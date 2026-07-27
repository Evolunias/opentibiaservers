import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-6-high-exp-server');
}

export default function Neprenia76HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-6-high-exp-server" />;
}
