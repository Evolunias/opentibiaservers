import OfficialAlasteraLoginKeywordPage, { generateMetadata } from './official-alastera-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAlasteraLoginKeywordPage />;
}
