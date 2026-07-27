import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-trainers-server-sweden');
}

export default function CyntaraWithTrainersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-trainers-server-sweden" />;
}
