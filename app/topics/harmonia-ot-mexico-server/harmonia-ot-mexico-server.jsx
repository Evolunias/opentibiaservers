import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-mexico-server');
}

export default function HarmoniaOtMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-mexico-server" />;
}
