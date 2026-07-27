import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-commands');
}

export default function MediviaCommandsKeywordPage() {
  return <StaticKeywordPage slug="medivia-commands" />;
}
