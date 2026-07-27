import CustomRealeraServerKeywordPage, { generateMetadata } from './custom-realera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealeraServerKeywordPage />;
}
