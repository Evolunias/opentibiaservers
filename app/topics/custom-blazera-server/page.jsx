import CustomBlazeraServerKeywordPage, { generateMetadata } from './custom-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBlazeraServerKeywordPage />;
}
