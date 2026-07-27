import CustomNilotOfficialKeywordPage, { generateMetadata } from './custom-nilot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomNilotOfficialKeywordPage />;
}
