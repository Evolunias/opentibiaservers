import NostaltherShopKeywordPage, { generateMetadata } from './nostalther-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NostaltherShopKeywordPage />;
}
