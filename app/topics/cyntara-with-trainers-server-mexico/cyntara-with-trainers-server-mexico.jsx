import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-trainers-server-mexico');
}

export default function CyntaraWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-trainers-server-mexico" />;
}
