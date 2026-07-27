import OxygenotPvpeKeywordPage, { generateMetadata } from './oxygenot-pvpe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OxygenotPvpeKeywordPage />;
}
