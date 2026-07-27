import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-trainers-server-poland');
}

export default function CyntaraWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-trainers-server-poland" />;
}
