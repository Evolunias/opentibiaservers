import ShiveraTibiaWorldKeywordPage, { generateMetadata } from './shivera-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShiveraTibiaWorldKeywordPage />;
}
