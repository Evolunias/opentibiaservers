import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-low-exp-server-south-america');
}

export default function SabrehavenLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-low-exp-server-south-america" />;
}
