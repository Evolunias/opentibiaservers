import TibiaoriginsKeywordPage, { generateMetadata } from './tibiaorigins';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsKeywordPage />;
}
