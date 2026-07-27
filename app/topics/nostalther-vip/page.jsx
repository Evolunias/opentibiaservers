import NostaltherVipKeywordPage, { generateMetadata } from './nostalther-vip';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherVipKeywordPage />;
}
