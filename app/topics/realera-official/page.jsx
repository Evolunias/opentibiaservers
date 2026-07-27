import RealeraOfficialKeywordPage, { generateMetadata } from './realera-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraOfficialKeywordPage />;
}
