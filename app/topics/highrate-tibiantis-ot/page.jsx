import HighrateTibiantisOtKeywordPage, { generateMetadata } from './highrate-tibiantis-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiantisOtKeywordPage />;
}
