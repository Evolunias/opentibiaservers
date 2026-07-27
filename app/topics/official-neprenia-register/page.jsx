import OfficialNepreniaRegisterKeywordPage, { generateMetadata } from './official-neprenia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialNepreniaRegisterKeywordPage />;
}
