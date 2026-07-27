import CustomCanobOtServerKeywordPage, { generateMetadata } from './custom-canob-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCanobOtServerKeywordPage />;
}
