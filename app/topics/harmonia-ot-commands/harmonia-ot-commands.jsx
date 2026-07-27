import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-commands');
}

export default function HarmoniaOtCommandsKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-commands" />;
}
