import NeranaTibiaWorldKeywordPage, { generateMetadata } from './nerana-tibia-world';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NeranaTibiaWorldKeywordPage />;
}
