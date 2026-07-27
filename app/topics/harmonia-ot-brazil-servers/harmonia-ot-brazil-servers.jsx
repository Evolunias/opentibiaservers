import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-brazil-servers');
}

export default function HarmoniaOtBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-brazil-servers" />;
}
