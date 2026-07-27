import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-trainers-server-argentina');
}

export default function CyntaraWithTrainersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-trainers-server-argentina" />;
}
