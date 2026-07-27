import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-mexico-servers');
}

export default function HarmoniaOtMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-mexico-servers" />;
}
