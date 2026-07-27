import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-uk-server');
}

export default function MadnessaliveUkServerKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-uk-server" />;
}
