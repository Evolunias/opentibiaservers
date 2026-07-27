import CustomRealestaOtKeywordPage, { generateMetadata } from './custom-realesta-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealestaOtKeywordPage />;
}
