import TibiaoriginsOtsKeywordPage, { generateMetadata } from './tibiaorigins-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaoriginsOtsKeywordPage />;
}
