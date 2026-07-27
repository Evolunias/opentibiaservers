import TibiantisKeywordPage, { generateMetadata } from './tibiantis';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiantisKeywordPage />;
}
