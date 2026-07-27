import CustomCarlinotKeywordPage, { generateMetadata } from './custom-carlinot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotKeywordPage />;
}
