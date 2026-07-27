import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-high-exp');
}

export default function Tibia74ServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-high-exp" />;
}
