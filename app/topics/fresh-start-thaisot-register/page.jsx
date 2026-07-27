import FreshStartThaisotRegisterKeywordPage, { generateMetadata } from './fresh-start-thaisot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotRegisterKeywordPage />;
}
