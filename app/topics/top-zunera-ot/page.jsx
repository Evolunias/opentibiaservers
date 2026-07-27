import TopZuneraOtKeywordPage, { generateMetadata } from './top-zunera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZuneraOtKeywordPage />;
}
