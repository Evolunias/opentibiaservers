import CustomTibiaraOfficialKeywordPage, { generateMetadata } from './custom-tibiara-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomTibiaraOfficialKeywordPage />;
}
