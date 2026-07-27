import CustomCarlinotOtKeywordPage, { generateMetadata } from './custom-carlinot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotOtKeywordPage />;
}
