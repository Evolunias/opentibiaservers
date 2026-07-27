import BestElderaOfficialKeywordPage, { generateMetadata } from './best-eldera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestElderaOfficialKeywordPage />;
}
