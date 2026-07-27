import MadnessaliveShopKeywordPage, { generateMetadata } from './madnessalive-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveShopKeywordPage />;
}
