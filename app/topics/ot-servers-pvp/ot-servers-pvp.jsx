import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-pvp');
}

export default function OtServersPvpKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-pvp" />;
}
