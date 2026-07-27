import CustomBlazeraOfficialKeywordPage, { generateMetadata } from './custom-blazera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomBlazeraOfficialKeywordPage />;
}
