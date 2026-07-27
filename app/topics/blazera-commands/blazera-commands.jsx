import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-commands');
}

export default function BlazeraCommandsKeywordPage() {
  return <StaticKeywordPage slug="blazera-commands" />;
}
