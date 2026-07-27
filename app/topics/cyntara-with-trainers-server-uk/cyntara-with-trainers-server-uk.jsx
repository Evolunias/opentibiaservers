import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-trainers-server-uk');
}

export default function CyntaraWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-trainers-server-uk" />;
}
