import PopularMediviaKeywordPage, { generateMetadata } from './popular-medivia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaKeywordPage />;
}
