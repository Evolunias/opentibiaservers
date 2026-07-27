import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-high-exp-server-south-america');
}

export default function SabrehavenHighExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-high-exp-server-south-america" />;
}
