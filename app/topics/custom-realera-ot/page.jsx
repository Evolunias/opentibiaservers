import CustomRealeraOtKeywordPage, { generateMetadata } from './custom-realera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealeraOtKeywordPage />;
}
