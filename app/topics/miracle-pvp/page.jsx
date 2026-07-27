import MiraclePvpKeywordPage, { generateMetadata } from './miracle-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiraclePvpKeywordPage />;
}
