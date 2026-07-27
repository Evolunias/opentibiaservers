import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-commands');
}

export default function NoxiousotCommandsKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-commands" />;
}
