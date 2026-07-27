import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-high-exp-server');
}

export default function Neprenia15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-high-exp-server" />;
}
