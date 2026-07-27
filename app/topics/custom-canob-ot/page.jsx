import CustomCanobOtKeywordPage, { generateMetadata } from './custom-canob-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCanobOtKeywordPage />;
}
