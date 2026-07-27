import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-servers-south-america');
}

export default function HighExpServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="high-exp-servers-south-america" />;
}
