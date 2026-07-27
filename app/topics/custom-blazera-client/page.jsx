import CustomBlazeraClientKeywordPage, { generateMetadata } from './custom-blazera-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBlazeraClientKeywordPage />;
}
