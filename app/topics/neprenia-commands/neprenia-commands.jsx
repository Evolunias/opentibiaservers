import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-commands');
}

export default function NepreniaCommandsKeywordPage() {
  return <StaticKeywordPage slug="neprenia-commands" />;
}
