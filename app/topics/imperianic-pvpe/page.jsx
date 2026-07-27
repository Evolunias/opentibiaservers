import ImperianicPvpeKeywordPage, { generateMetadata } from './imperianic-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ImperianicPvpeKeywordPage />;
}
