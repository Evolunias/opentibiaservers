import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-10-0-low-exp-server');
}

export default function Neprenia100LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-10-0-low-exp-server" />;
}
