import CustomRealestaOfficialKeywordPage, { generateMetadata } from './custom-realesta-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRealestaOfficialKeywordPage />;
}
