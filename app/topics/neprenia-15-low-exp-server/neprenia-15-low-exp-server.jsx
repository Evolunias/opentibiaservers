import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-15-low-exp-server');
}

export default function Neprenia15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="neprenia-15-low-exp-server" />;
}
