import TibiaoriginsOtKeywordPage, { generateMetadata } from './tibiaorigins-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsOtKeywordPage />;
}
