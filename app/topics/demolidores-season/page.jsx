import DemolidoresSeasonKeywordPage, { generateMetadata } from './demolidores-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DemolidoresSeasonKeywordPage />;
}
