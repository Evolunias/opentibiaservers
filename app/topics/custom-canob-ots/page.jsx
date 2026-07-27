import CustomCanobOtsKeywordPage, { generateMetadata } from './custom-canob-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCanobOtsKeywordPage />;
}
