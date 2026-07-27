import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-7-72-low-exp-server');
}

export default function Neprenia772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-7-72-low-exp-server" />;
}
