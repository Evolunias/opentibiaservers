import CustomCarlinotServerKeywordPage, { generateMetadata } from './custom-carlinot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCarlinotServerKeywordPage />;
}
