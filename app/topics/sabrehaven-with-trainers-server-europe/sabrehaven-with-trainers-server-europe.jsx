import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-trainers-server-europe');
}

export default function SabrehavenWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-trainers-server-europe" />;
}
