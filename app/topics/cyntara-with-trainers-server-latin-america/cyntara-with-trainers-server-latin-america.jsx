import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-with-trainers-server-latin-america');
}

export default function CyntaraWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="cyntara-with-trainers-server-latin-america" />;
}
