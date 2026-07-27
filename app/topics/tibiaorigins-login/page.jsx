import TibiaoriginsLoginKeywordPage, { generateMetadata } from './tibiaorigins-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsLoginKeywordPage />;
}
