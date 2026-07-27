import CustomTibijkaOtServerKeywordPage, { generateMetadata } from './custom-tibijka-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibijkaOtServerKeywordPage />;
}
