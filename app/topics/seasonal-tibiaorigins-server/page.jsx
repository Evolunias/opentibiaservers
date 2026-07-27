import SeasonalTibiaoriginsServerKeywordPage, { generateMetadata } from './seasonal-tibiaorigins-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalTibiaoriginsServerKeywordPage />;
}
