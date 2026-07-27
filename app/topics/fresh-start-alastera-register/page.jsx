import FreshStartAlasteraRegisterKeywordPage, { generateMetadata } from './fresh-start-alastera-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartAlasteraRegisterKeywordPage />;
}
