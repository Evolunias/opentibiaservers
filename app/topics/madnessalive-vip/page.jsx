import MadnessaliveVipKeywordPage, { generateMetadata } from './madnessalive-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveVipKeywordPage />;
}
