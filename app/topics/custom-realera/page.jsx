import CustomRealeraKeywordPage, { generateMetadata } from './custom-realera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealeraKeywordPage />;
}
