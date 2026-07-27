import ActiveTibianusOfficialKeywordPage, { generateMetadata } from './active-tibianus-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibianusOfficialKeywordPage />;
}
