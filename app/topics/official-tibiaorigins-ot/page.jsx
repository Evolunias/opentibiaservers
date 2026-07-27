import OfficialTibiaoriginsOtKeywordPage, { generateMetadata } from './official-tibiaorigins-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialTibiaoriginsOtKeywordPage />;
}
