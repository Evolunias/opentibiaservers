import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-launcher');
}

export default function MadnessaliveLauncherKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-launcher" />;
}
