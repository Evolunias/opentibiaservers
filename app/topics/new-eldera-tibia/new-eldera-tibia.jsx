import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eldera-tibia');
}

export default function NewElderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-eldera-tibia" />;
}
