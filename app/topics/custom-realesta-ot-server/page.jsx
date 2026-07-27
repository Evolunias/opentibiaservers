import CustomRealestaOtServerKeywordPage, { generateMetadata } from './custom-realesta-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealestaOtServerKeywordPage />;
}
