import CustomCanobServerKeywordPage, { generateMetadata } from './custom-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCanobServerKeywordPage />;
}
