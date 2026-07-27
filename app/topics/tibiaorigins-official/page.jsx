import TibiaoriginsOfficialKeywordPage, { generateMetadata } from './tibiaorigins-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsOfficialKeywordPage />;
}
