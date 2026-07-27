import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia');
}

export default function HarmoniaKeywordPage() {
  return <StaticKeywordPage slug="harmonia" />;
}
