import SeasonalNostaltherServerKeywordPage, { generateMetadata } from './seasonal-nostalther-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SeasonalNostaltherServerKeywordPage />;
}
