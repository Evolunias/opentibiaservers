import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('madnessalive-uk-servers');
}

export default function MadnessaliveUkServersKeywordPage() {
  return <StaticKeywordPage slug="madnessalive-uk-servers" />;
}
