import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-with-trainers-server-france');
}

export default function SabrehavenWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-with-trainers-server-france" />;
}
