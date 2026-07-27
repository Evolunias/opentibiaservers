import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-tibia');
}

export default function ClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-tibia" />;
}
