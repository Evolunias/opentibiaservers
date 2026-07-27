import MiraclePvpeKeywordPage, { generateMetadata } from './miracle-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiraclePvpeKeywordPage />;
}
