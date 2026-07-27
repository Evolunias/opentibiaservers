import CustomRealeraClientKeywordPage, { generateMetadata } from './custom-realera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealeraClientKeywordPage />;
}
