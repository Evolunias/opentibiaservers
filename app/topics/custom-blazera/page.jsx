import CustomBlazeraKeywordPage, { generateMetadata } from './custom-blazera';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBlazeraKeywordPage />;
}
