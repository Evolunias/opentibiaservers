import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ot-servers-south-america');
}

export default function OtServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ot-servers-south-america" />;
}
