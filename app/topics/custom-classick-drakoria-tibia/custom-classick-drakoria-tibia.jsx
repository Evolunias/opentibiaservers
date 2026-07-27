import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classick-drakoria-tibia');
}

export default function CustomClassickDrakoriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-classick-drakoria-tibia" />;
}
