import MistOfDeathVipKeywordPage, { generateMetadata } from './mist-of-death-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MistOfDeathVipKeywordPage />;
}
