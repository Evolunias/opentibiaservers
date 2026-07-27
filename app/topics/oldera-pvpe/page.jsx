import OlderaPvpeKeywordPage, { generateMetadata } from './oldera-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaPvpeKeywordPage />;
}
