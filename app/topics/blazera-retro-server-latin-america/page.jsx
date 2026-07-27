import BlazeraRetroServerLatinAmericaKeywordPage, { generateMetadata } from './blazera-retro-server-latin-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraRetroServerLatinAmericaKeywordPage />;
}
