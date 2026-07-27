import CustomCanobKeywordPage, { generateMetadata } from './custom-canob';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCanobKeywordPage />;
}
