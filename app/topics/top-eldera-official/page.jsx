import TopElderaOfficialKeywordPage, { generateMetadata } from './top-eldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopElderaOfficialKeywordPage />;
}
