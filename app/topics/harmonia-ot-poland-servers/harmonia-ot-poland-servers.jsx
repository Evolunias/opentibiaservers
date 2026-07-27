import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-poland-servers');
}

export default function HarmoniaOtPolandServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-poland-servers" />;
}
