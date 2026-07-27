import TopClassicusOtKeywordPage, { generateMetadata } from './top-classicus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopClassicusOtKeywordPage />;
}
