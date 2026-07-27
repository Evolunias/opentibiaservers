import PvpeBlazeraServerKeywordPage, { generateMetadata } from './pvpe-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpeBlazeraServerKeywordPage />;
}
