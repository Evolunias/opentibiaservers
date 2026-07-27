import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-trainers-server-germany');
}

export default function CyntaraWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-trainers-server-germany" />;
}
