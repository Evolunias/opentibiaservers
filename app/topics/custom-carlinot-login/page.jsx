import CustomCarlinotLoginKeywordPage, { generateMetadata } from './custom-carlinot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotLoginKeywordPage />;
}
